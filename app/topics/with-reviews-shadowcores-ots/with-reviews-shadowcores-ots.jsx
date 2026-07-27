import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-ots');
}

export default function WithReviewsShadowcoresOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-ots" />;
}
