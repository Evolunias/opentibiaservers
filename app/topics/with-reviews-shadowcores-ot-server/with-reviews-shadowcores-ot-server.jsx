import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-ot-server');
}

export default function WithReviewsShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-ot-server" />;
}
