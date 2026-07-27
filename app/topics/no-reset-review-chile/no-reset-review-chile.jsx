import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-chile');
}

export default function NoResetReviewChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-chile" />;
}
