import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-uk');
}

export default function AmeriaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-uk" />;
}
