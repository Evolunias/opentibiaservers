import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-with-reviews-server');
}

export default function Ameria1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-with-reviews-server" />;
}
