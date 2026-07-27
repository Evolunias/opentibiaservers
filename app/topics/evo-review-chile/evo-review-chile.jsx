import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-chile');
}

export default function EvoReviewChileKeywordPage() {
  return <StaticKeywordPage slug="evo-review-chile" />;
}
