import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-canada');
}

export default function OlderaWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-canada" />;
}
