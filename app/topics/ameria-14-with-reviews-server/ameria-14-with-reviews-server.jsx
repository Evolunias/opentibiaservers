import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-with-reviews-server');
}

export default function Ameria14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-with-reviews-server" />;
}
