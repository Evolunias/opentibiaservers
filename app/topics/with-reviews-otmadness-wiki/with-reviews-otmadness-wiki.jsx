import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-wiki');
}

export default function WithReviewsOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-wiki" />;
}
