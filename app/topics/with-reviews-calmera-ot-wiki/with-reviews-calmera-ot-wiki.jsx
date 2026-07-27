import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-calmera-ot-wiki');
}

export default function WithReviewsCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-calmera-ot-wiki" />;
}
