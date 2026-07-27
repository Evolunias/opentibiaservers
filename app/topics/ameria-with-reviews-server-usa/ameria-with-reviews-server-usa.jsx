import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-usa');
}

export default function AmeriaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-usa" />;
}
