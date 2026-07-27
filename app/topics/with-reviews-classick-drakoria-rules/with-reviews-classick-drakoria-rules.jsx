import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-rules');
}

export default function WithReviewsClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-rules" />;
}
