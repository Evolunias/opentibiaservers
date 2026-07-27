import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-chile');
}

export default function RealeraWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-chile" />;
}
