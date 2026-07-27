import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-with-reviews-server');
}

export default function Ameria86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-with-reviews-server" />;
}
