import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-canada');
}

export default function MediviaWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-canada" />;
}
