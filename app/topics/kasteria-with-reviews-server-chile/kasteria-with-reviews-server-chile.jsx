import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-chile');
}

export default function KasteriaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-chile" />;
}
