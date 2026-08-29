import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import EzodusWikiPage from '@/app/components/EzodusWikiPage';
import RubinotWikiPage from '@/app/components/RubinotWikiPage';
import ExordionWikiPage from '@/app/components/ExordionWikiPage';
import RealeraWikiPage from '@/app/components/RealeraWikiPage';
import AureraGlobalWikiPage from '@/app/components/AureraGlobalWikiPage';
import KaldroxWikiPage from '@/app/components/KaldroxWikiPage';
import DemolidoresWikiPage from '@/app/components/DemolidoresWikiPage';
import IxodusWikiPage from '@/app/components/IxodusWikiPage';

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
  const slug = String(params.slug || '').toLowerCase();

  if (slug === 'demolidores') return <DemolidoresWikiPage />;
  if (slug === 'ezodus') return <EzodusWikiPage />;
  if (slug === 'rubinot') return <RubinotWikiPage />;
  if (slug === 'exordion') return <ExordionWikiPage />;
  if (slug === 'realera') return <RealeraWikiPage />;
  if (slug === 'aurera-global') return <AureraGlobalWikiPage />;
  if (slug === 'kaldrox') return <KaldroxWikiPage />;
  if (slug === 'ixodus') return <IxodusWikiPage />;
  return <CanonicalServerRoute slug={slug} />;
}
