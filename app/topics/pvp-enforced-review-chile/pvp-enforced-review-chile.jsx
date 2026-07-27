import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-chile');
}

export default function PvpEnforcedReviewChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-chile" />;
}
