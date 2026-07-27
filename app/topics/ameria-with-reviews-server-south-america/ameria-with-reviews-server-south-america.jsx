import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-south-america');
}

export default function AmeriaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-south-america" />;
}
