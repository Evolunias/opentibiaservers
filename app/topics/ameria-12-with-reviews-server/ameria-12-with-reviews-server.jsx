import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-with-reviews-server');
}

export default function Ameria12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-with-reviews-server" />;
}
