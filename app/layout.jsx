import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EmailCaptureModal from "./components/EmailCaptureModal";
import { buildAbsoluteUrl, getSiteName, getSiteUrl } from '@/lib/seo';

const siteName = getSiteName();
const siteUrl = getSiteUrl();
const defaultTitle = `${siteName} | Best Open Tibia Servers by Peak Players & Ratings`;
const defaultDescription =
  'Discover and rank Open Tibia servers by highest recorded player count, ratings, daily votes, uptime, client version, and location. Compare OT worlds with reviews and owner-managed profiles.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    'open tibia servers',
    'best ot servers',
    'ot server list',
    'open tibia server ranking',
    'tibia private servers',
    'otservlist alternative',
    'open tibia server reviews',
    'highest player count ot servers',
    'ot server votes',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'games',
  alternates: {
    canonical: buildAbsoluteUrl('/'),
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: buildAbsoluteUrl('/'),
    siteName,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  other: {
    'theme-color': '#0f172a',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: buildAbsoluteUrl('/opengraph-image'),
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="ots-directory-light">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AuthProvider>
          <Header />
          {children}
          <Footer />
          <EmailCaptureModal />
        </AuthProvider>
      </body>
    </html>
  );
}
