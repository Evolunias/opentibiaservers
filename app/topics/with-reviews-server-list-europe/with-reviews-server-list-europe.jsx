import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-europe');
}

export default function WithReviewsServerListEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-europe" />;
}
