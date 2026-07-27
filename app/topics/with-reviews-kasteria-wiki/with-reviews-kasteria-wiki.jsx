import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-wiki');
}

export default function WithReviewsKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-wiki" />;
}
