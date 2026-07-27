import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-rules');
}

export default function WithReviewsCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-rules" />;
}
