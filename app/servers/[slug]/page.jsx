import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';
import RubinotWikiPage from '@/app/components/RubinotWikiPage';
import ExordionWikiPage from '@/app/components/ExordionWikiPage';

export async function generateMetadata({ params }) {
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ServerSlugPage({ params }) {
  if (params.slug === 'ezodus') return <EzodusWikiPage />;
  if (params.slug === 'rubinot') return <RubinotWikiPage />;
  if (params.slug === 'exordion') return <ExordionWikiPage />;
  return <CanonicalServerRoute slug={params.slug} />;
}
