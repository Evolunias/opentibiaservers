import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-chile');
}

export default function OlderaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-chile" />;
}
