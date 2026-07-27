import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-review-chile');
}

export default function WithActivePlayersReviewChileKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-review-chile" />;
}
