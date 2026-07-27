import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-chile');
}

export default function WithReviewsOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-chile" />;
}
