import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-with-reviews-server');
}

export default function Ameria772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-with-reviews-server" />;
}
