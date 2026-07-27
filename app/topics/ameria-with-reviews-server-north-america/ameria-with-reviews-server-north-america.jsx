import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-north-america');
}

export default function AmeriaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-north-america" />;
}
