import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-brazil');
}

export default function AmeriaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-brazil" />;
}
