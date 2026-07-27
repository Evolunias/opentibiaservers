import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-wiki');
}

export default function WithReviewsAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-wiki" />;
}
