import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-with-reviews-server');
}

export default function Ameria76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-with-reviews-server" />;
}
