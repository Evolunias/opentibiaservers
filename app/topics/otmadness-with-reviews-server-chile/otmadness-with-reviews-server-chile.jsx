import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-chile');
}

export default function OtmadnessWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-chile" />;
}
