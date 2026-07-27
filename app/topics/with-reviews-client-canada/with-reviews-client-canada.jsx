import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-client-canada');
}

export default function WithReviewsClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-client-canada" />;
}
