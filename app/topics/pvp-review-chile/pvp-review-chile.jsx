import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-chile');
}

export default function PvpReviewChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-chile" />;
}
