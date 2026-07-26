import HomeClient from './HomeClient';
import { fetchDirectoryServers } from '@/lib/directory-data';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getServerPath } from '@/lib/server-paths';

export const revalidate = 900;

export async function generateMetadata() {
  const title = `${getSiteName()} | Open Tibia Servers, OT Server List and Live Player Counts`;
  const description = 'Browse live Open Tibia servers by player count, version, country, PvP type, uptime, rates, and reviews. Updated from public otservlist data.';

  return {
    title,
    description,
    alternates: {
      canonical: buildAbsoluteUrl('/'),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl('/'),
      siteName: getSiteName(),
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function HomePage() {
  const initialData = await fetchDirectoryServers({ page: 1, pageSize: 25, onlineOnly: true });
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: getSiteName(),
    url: buildAbsoluteUrl('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${buildAbsoluteUrl('/')}?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Open Tibia server list',
    numberOfItems: initialData.total,
    itemListElement: initialData.servers.map((server, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: server.name,
      url: buildAbsoluteUrl(getServerPath(server)),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <HomeClient initialServers={initialData.servers} initialTotal={initialData.total} initialError={initialData.error} />
    </>
  );
}
