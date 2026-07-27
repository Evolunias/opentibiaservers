import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-rules');
}

export default function WithReviewsEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-rules" />;
}
