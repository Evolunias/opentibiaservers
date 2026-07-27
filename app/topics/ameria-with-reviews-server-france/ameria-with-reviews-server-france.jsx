import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-reviews-server-france');
}

export default function AmeriaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-reviews-server-france" />;
}
