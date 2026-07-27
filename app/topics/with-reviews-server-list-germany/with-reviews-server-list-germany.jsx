import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-germany');
}

export default function WithReviewsServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-germany" />;
}
