import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-ot');
}

export default function WithReviewsShadowcoresOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-ot" />;
}
