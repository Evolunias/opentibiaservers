import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-wiki');
}

export default function WithReviewsMediviaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-wiki" />;
}
