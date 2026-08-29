import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';
import RubinotWikiPage from '@/app/components/RubinotWikiPage';
import ExordionWikiPage from '@/app/components/ExordionWikiPage';
import RealeraWikiPage from '@/app/components/RealeraWikiPage';
import AureraGlobalWikiPage from '@/app/components/AureraGlobalWikiPage';
import KaldroxWikiPage from '@/app/components/KaldroxWikiPage';

export async function generateMetadata({ params }) {
  if (params.slug === 'aurera-global') {
    return {
      title: 'Aurera Global | OpenTibiaServers Wiki',
      description: 'A wiki-style Aurera Global guide covering worlds, Retro-PvP, rates, events, rules, client paths, and current verification.',
    };
  }
  if (params.slug === 'kaldrox') {
    return {
      title: 'Kaldrox | OpenTibiaServers Wiki',
      description: 'A wiki-style Kaldrox guide covering the 8.60 Global Map profile, staged rates, PvP, systems, client verification, and current source notes.',
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
  if (params.slug === 'kaldrox') return <KaldroxWikiPage />;
  return <CanonicalServerRoute slug={params.slug} />;
}
