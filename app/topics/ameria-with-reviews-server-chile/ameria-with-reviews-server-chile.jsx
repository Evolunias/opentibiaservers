import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-chile');
}

export default function AmeriaWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-chile" />;
}
