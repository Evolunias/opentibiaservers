import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-reviews');
}

export default function DragonBallLegendReviewsKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-reviews" />;
}
