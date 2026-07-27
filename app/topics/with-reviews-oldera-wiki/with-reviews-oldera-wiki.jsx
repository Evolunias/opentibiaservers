import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-wiki');
}

export default function WithReviewsOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-wiki" />;
}
