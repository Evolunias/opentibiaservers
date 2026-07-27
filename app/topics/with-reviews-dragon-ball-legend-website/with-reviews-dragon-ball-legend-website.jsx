import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-website');
}

export default function WithReviewsDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-website" />;
}
