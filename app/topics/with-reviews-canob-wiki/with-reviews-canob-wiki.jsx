import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-wiki');
}

export default function WithReviewsCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-wiki" />;
}
