import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-shadowcores-wiki');
}

export default function WithReviewsShadowcoresWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-shadowcores-wiki" />;
}
