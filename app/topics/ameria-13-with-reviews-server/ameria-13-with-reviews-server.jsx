import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-with-reviews-server');
}

export default function Ameria13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-with-reviews-server" />;
}
