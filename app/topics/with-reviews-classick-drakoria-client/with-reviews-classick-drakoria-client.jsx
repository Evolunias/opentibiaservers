import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-client');
}

export default function WithReviewsClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-client" />;
}
