import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';

export async function generateMetadata({ params }) {
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ServerSlugPage({ params }) {
  if (params.slug === 'ezodus') return <EzodusWikiPage />;
  return <CanonicalServerRoute slug={params.slug} />;
}
