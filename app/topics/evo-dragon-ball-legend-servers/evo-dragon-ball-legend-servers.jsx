import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-dragon-ball-legend-servers');
}

export default function EvoDragonBallLegendServersKeywordPage() {
  return <StaticKeywordPage slug="evo-dragon-ball-legend-servers" />;
}
