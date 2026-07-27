import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-with-reviews-server');
}

export default function Ameria15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-with-reviews-server" />;
}
