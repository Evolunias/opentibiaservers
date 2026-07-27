import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-reviews-server-france');
}

export default function DragonBallLegendWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-reviews-server-france" />;
}
