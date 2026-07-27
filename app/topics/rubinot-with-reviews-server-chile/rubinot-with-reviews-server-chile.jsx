import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-chile');
}

export default function RubinotWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-chile" />;
}
