import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-chile');
}

export default function TibijkaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-chile" />;
}
