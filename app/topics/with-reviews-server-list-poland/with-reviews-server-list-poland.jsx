import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-list-poland');
}

export default function WithReviewsServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-list-poland" />;
}
