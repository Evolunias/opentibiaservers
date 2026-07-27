import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-with-reviews-server');
}

export default function DragonBallLegend12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-with-reviews-server" />;
}
