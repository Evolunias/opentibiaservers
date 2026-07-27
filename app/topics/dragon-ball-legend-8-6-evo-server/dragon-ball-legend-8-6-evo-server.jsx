import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-6-evo-server');
}

export default function DragonBallLegend86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-6-evo-server" />;
}
