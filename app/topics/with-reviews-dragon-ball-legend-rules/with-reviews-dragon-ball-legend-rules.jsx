import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-rules');
}

export default function WithReviewsDragonBallLegendRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-rules" />;
}
