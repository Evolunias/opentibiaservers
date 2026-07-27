import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-review-chile');
}

export default function FreshStartReviewChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-review-chile" />;
}
