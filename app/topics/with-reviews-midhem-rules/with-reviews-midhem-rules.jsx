import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-rules');
}

export default function WithReviewsMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-rules" />;
}
