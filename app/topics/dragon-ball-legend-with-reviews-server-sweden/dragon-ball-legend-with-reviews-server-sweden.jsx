import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-reviews-server-sweden');
}

export default function DragonBallLegendWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-reviews-server-sweden" />;
}
