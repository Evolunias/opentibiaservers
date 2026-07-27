import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-canada');
}

export default function NostaltherWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-canada" />;
}
