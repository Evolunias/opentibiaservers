import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-europe');
}

export default function AmeriaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-europe" />;
}
