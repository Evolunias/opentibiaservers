import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-chile');
}

export default function RealestaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-chile" />;
}
