import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-rules');
}

export default function WithReviewsAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-rules" />;
}
