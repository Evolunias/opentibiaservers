import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eternal-odyssey-wiki');
}

export default function WithReviewsEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eternal-odyssey-wiki" />;
}
