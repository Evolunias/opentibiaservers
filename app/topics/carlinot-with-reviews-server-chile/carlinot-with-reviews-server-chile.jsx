import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-reviews-server-chile');
}

export default function CarlinotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-reviews-server-chile" />;
}
