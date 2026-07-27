import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-chile');
}

export default function MediviaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-chile" />;
}
