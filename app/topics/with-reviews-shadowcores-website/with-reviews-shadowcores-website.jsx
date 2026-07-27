import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-website');
}

export default function WithReviewsShadowcoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-website" />;
}
