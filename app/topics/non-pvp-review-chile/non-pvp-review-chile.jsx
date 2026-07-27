import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-chile');
}

export default function NonPvpReviewChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-chile" />;
}
