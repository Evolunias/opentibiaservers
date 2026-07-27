import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-15-with-reviews-server');
}

export default function DragonBallLegend15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-15-with-reviews-server" />;
}
