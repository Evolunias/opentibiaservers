import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-with-reviews-server');
}

export default function Ameria11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-with-reviews-server" />;
}
