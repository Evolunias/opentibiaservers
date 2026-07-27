import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-chile');
}

export default function WithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-chile" />;
}
