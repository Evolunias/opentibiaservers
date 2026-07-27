import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-chile');
}

export default function NepreniaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-chile" />;
}
