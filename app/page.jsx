import HomeClient from './HomeClient';
import { fetchDirectoryServers } from '@/lib/directory-data';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { getServerPath } from '@/lib/server-paths';

export const revalidate = 900;

export async function generateMetadata() {
  const title = 'Best Open Tibia Servers Ranked by Peak Players, Ratings & Votes';
  const description =
    'Browse the top Open Tibia servers ranked by highest recorded player count, community ratings, and daily votes. Filter by version, location, PvP type, and uptime.';

  return {
    title,
    description,
    keywords: [
      'best open tibia servers',
      'ot server rankings',
      'highest player count ot',
      'open tibia server list',
      'ot server votes',
      'tibia private server directory',
    ],
    alternates: {
      canonical: buildAbsoluteUrl('/'),
    },
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function HomePage() {
  const initialData = await fetchDirectoryServers({ page: 1, pageSize: 25, onlineOnly: false });
  const siteName = getSiteName();

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: buildAbsoluteUrl('/'),
    description:
      'Open Tibia server directory with rankings by peak players, ratings, votes, and uptime.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${buildAbsoluteUrl('/')}?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Open Tibia Server Rankings',
    url: buildAbsoluteUrl('/'),
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: buildAbsoluteUrl('/'),
    },
    about: {
      '@type': 'Thing',
      name: 'Open Tibia private servers',
    },
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Open Tibia servers by peak players',
    numberOfItems: initialData.total,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <HomeClient
        initialServers={initialData.servers}
        initialTotal={initialData.total}
        initialError={initialData.error}
      />
    </>
  );
}
