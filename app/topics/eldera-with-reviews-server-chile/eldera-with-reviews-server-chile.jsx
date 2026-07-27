import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-chile');
}

export default function ElderaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-chile" />;
}
