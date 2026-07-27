import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-with-reviews-server');
}

export default function Ameria96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-with-reviews-server" />;
}
