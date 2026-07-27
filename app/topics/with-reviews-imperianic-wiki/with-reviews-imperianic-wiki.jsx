import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-wiki');
}

export default function WithReviewsImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-wiki" />;
}
