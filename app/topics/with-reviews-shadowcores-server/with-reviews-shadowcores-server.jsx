import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-server');
}

export default function WithReviewsShadowcoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-server" />;
}
