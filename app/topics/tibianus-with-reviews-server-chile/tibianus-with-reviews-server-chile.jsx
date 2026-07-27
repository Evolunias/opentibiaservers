import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-chile');
}

export default function TibianusWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-chile" />;
}
