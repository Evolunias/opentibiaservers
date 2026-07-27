import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-launch-chile');
}

export default function WithReviewsLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-launch-chile" />;
}
