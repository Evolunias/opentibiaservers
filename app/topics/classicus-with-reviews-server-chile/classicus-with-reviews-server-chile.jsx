import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-reviews-server-chile');
}

export default function ClassicusWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-reviews-server-chile" />;
}
