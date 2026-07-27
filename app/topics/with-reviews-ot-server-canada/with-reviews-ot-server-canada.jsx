import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-canada');
}

export default function WithReviewsOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-canada" />;
}
