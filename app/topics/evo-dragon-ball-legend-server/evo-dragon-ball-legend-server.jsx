import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-dragon-ball-legend-server');
}

export default function EvoDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="evo-dragon-ball-legend-server" />;
}
