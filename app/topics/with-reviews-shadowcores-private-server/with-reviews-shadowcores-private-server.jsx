import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-private-server');
}

export default function WithReviewsShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-private-server" />;
}
