import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-mexico');
}

export default function AmeriaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-mexico" />;
}
