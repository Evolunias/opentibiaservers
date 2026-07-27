import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-wiki');
}

export default function WithReviewsRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-wiki" />;
}
