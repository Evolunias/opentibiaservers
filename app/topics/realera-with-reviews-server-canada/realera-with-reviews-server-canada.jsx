import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-canada');
}

export default function RealeraWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-canada" />;
}
