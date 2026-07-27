import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-login');
}

export default function WithReviewsShadowcoresLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-login" />;
}
