import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-wars');
}

export default function DragonBallLegendWarsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-wars" />;
}
