import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-with-reviews-server');
}

export default function Ameria81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-with-reviews-server" />;
}
