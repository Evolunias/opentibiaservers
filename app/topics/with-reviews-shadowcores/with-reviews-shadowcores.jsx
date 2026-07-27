import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores');
}

export default function WithReviewsShadowcoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores" />;
}
