import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-chile');
}

export default function MidhemWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-chile" />;
}
