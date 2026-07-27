import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-wiki');
}

export default function WithReviewsOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-wiki" />;
}
