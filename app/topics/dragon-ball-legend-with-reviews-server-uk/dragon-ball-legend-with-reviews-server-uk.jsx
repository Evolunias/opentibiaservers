import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-reviews-server-uk');
}

export default function DragonBallLegendWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-reviews-server-uk" />;
}
