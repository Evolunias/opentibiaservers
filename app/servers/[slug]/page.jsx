import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';
import RubinotWikiPage from '@/app/components/RubinotWikiPage';
import ExordionWikiPage from '@/app/components/ExordionWikiPage';
import RealeraWikiPage from '@/app/components/RealeraWikiPage';
import AureraGlobalWikiPage from '@/app/components/AureraGlobalWikiPage';

export async function generateMetadata({ params }) {
  if (params.slug === 'aurera-global') {
    return {
      title: 'Aurera Global | OpenTibiaServers Wiki',
      description: 'A wiki-style Aurera Global guide covering worlds, Retro-PvP, rates, events, rules, client paths, and current verification.',
    };
  }
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ServerSlugPage({ params }) {
  if (params.slug === 'ezodus') return <EzodusWikiPage />;
  if (params.slug === 'rubinot') return <RubinotWikiPage />;
  if (params.slug === 'exordion') return <ExordionWikiPage />;
  if (params.slug === 'realera') return <RealeraWikiPage />;
  if (params.slug === 'aurera-global') return <AureraGlobalWikiPage />;
  return <CanonicalServerRoute slug={params.slug} />;
}
