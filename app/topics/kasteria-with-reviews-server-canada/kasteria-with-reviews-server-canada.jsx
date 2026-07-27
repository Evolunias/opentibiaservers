import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-canada');
}

export default function KasteriaWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-canada" />;
}
