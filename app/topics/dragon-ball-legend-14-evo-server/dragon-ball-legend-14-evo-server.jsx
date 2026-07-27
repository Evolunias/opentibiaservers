import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-evo-server');
}

export default function DragonBallLegend14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-evo-server" />;
}
