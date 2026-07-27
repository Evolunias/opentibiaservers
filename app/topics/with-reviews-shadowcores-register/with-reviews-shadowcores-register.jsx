import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-register');
}

export default function WithReviewsShadowcoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-register" />;
}
