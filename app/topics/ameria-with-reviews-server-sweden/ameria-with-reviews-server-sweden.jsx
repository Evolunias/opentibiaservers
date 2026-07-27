import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-sweden');
}

export default function AmeriaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-sweden" />;
}
