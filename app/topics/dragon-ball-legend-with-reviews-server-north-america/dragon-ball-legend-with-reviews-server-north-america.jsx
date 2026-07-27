import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-reviews-server-north-america');
}

export default function DragonBallLegendWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-reviews-server-north-america" />;
}
