import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-wiki');
}

export default function WithReviewsInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-wiki" />;
}
