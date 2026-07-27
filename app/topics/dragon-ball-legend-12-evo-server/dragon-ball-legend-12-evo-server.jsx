import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-evo-server');
}

export default function DragonBallLegend12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-evo-server" />;
}
