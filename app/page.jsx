import ForumIndex from './components/ForumIndex';
import SiteModeTabs from './components/SiteModeTabs';
import { getForumIndex } from '@/lib/forum-data';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';

export const revalidate = 120;

export async function generateMetadata() {
  const title = 'Open Tibia Forum — Support, Releases, Scripts, Mapping & Servers';
  const description =
    'Modern Open Tibia community forum for support, downloads, scripting, mapping, server launches, jobs, and development — plus a full OT server directory.';

  return {
    title,
    description,
    keywords: [
      'open tibia forum',
      'otland alternative',
      'ot server forum',
      'tfs scripts',
      'otclient',
      'open tibia mapping',
      'ot server releases',
    ],
    alternates: { canonical: buildAbsoluteUrl('/') },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl('/'),
      siteName: getSiteName(),
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function HomePage() {
  const { sections, error } = await getForumIndex();

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: getSiteName(),
    url: buildAbsoluteUrl('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${buildAbsoluteUrl('/directory')}?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main className="directory-shell min-h-screen">
        <div className="directory-shell__glow" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-12">
          <SiteModeTabs />
          <ForumIndex sections={sections} error={error} />
        </div>
      </main>
    </>
  );
}

