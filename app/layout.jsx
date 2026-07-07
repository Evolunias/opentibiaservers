import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { buildAbsoluteUrl, getSiteName, getSiteUrl } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${getSiteName()} | Open Tibia Server Directory`,
    template: `%s | ${getSiteName()}`,
  },
  description: "Browse, compare, review, and monitor Open Tibia servers. Find live player counts, uptime, rates, server details, and owner-managed listings.",
  keywords: [
    "open tibia servers",
    "ot server list",
    "open tibia server directory",
    "tibia private servers",
    "otservlist alternative",
    "open tibia server reviews",
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/'),
  },
  openGraph: {
    title: `${getSiteName()} | Open Tibia Server Directory`,
    description: "Open Tibia server listings, reviews, player counts, uptime data, and owner-managed profiles.",
    url: buildAbsoluteUrl('/'),
    siteName: getSiteName(),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${getSiteName()} | Open Tibia Server Directory`,
    description: "Open Tibia server listings, reviews, player counts, uptime data, and owner-managed profiles.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
