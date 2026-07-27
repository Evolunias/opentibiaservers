import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-high-exp-server');
}

export default function DragonBallLegend12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-high-exp-server" />;
}
