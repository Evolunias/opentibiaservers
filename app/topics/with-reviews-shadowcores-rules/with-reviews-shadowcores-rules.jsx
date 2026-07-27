import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-rules');
}

export default function WithReviewsShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-rules" />;
}
