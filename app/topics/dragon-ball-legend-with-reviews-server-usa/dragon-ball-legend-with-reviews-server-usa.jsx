import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-reviews-server-usa');
}

export default function DragonBallLegendWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-reviews-server-usa" />;
}
