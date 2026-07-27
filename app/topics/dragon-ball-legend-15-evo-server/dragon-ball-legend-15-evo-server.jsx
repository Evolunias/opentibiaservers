import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-evo-server');
}

export default function DragonBallLegend15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-evo-server" />;
}
