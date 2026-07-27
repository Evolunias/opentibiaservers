import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-wiki');
}

export default function WithReviewsRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-wiki" />;
}
