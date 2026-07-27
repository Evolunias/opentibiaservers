import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-poland');
}

export default function WithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-poland" />;
}
