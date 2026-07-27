import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-11-evo-server');
}

export default function DragonBallLegend11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-11-evo-server" />;
}
