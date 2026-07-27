import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-chile');
}

export default function RetroReviewChileKeywordPage() {
  return <StaticKeywordPage slug="retro-review-chile" />;
}
