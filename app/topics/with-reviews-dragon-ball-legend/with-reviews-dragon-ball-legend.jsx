import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend');
}

export default function WithReviewsDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend" />;
}
