import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-canada');
}

export default function WithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-canada" />;
}
