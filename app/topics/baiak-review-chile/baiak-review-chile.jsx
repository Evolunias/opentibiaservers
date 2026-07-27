import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-chile');
}

export default function BaiakReviewChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-chile" />;
}
