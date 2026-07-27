import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-reviews-server-europe');
}

export default function DragonBallLegendWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-reviews-server-europe" />;
}
