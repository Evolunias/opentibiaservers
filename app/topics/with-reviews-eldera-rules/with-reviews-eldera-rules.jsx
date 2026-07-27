import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-rules');
}

export default function WithReviewsElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-rules" />;
}
