import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-chile');
}

export default function TibiameWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-chile" />;
}
