import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-create-account');
}

export default function WithReviewsShadowcoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-create-account" />;
}
