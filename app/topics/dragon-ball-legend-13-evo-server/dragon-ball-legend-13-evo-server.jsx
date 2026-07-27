import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-evo-server');
}

export default function DragonBallLegend13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-evo-server" />;
}
