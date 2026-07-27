import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-ots');
}

export default function WithReviewsClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-ots" />;
}
