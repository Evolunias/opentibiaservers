import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-8-0-evo-server');
}

export default function DragonBallLegend80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-8-0-evo-server" />;
}
