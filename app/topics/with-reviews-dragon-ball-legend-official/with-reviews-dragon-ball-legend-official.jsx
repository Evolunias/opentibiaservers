import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-official');
}

export default function WithReviewsDragonBallLegendOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-official" />;
}
