import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-chile');
}

export default function PvpeReviewChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-chile" />;
}
