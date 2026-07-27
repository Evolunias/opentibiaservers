import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-10-0-evo-server');
}

export default function DragonBallLegend100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-10-0-evo-server" />;
}
