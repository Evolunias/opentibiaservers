import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';
import RubinotWikiPage from '@/app/components/RubinotWikiPage';
import ExordionWikiPage from '@/app/components/ExordionWikiPage';
import RealeraWikiPage from '@/app/components/RealeraWikiPage';

export async function generateMetadata({ params }) {
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ServerSlugPage({ params }) {
  if (params.slug === 'ezodus') return <EzodusWikiPage />;
  if (params.slug === 'rubinot') return <RubinotWikiPage />;
  if (params.slug === 'exordion') return <ExordionWikiPage />;
  if (params.slug === 'realera') return <RealeraWikiPage />;
  return <CanonicalServerRoute slug={params.slug} />;
}
