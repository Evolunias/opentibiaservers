import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-season-chile');
}

export default function WithReviewsSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-season-chile" />;
}
