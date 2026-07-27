import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-client');
}

export default function WithReviewsShadowcoresClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-client" />;
}
