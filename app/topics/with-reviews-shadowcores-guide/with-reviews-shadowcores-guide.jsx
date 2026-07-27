import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-guide');
}

export default function WithReviewsShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-guide" />;
}
