import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-guide');
}

export default function DragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-guide" />;
}
