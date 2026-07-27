import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-germany');
}

export default function AmeriaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-germany" />;
}
