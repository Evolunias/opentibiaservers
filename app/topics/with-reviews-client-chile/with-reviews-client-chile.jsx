import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-chile');
}

export default function WithReviewsClientChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-chile" />;
}
