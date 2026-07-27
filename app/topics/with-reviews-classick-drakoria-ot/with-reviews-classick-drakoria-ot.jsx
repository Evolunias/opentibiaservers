import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-ot');
}

export default function WithReviewsClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-ot" />;
}
