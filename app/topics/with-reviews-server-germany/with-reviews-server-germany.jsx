import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-germany');
}

export default function WithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-germany" />;
}
