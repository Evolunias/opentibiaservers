import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-canada');
}

export default function WithReviewsServerListCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-canada" />;
}
