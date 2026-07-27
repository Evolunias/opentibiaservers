import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-wiki');
}

export default function WithReviewsAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-wiki" />;
}
