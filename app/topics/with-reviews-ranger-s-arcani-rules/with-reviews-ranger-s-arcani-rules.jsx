import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-rules');
}

export default function WithReviewsRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-rules" />;
}
