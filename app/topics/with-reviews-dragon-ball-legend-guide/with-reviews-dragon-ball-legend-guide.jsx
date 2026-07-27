import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-guide');
}

export default function WithReviewsDragonBallLegendGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-guide" />;
}
