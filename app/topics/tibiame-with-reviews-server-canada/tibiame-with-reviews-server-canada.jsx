import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-canada');
}

export default function TibiameWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-canada" />;
}
