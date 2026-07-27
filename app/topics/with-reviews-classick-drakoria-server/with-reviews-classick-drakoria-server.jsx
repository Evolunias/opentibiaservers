import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-server');
}

export default function WithReviewsClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-server" />;
}
