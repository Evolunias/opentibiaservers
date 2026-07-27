import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-latin-america');
}

export default function AmeriaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-latin-america" />;
}
