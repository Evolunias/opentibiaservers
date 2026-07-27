import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-canada');
}

export default function NepreniaWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-canada" />;
}
