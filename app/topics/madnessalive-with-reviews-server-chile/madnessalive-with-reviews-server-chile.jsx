import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-chile');
}

export default function MadnessaliveWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-chile" />;
}
