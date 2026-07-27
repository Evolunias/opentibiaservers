import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-tibia');
}

export default function WithReviewsDragonBallLegendTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-tibia" />;
}
