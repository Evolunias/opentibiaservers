import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-with-reviews-server');
}

export default function Ameria100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-with-reviews-server" />;
}
