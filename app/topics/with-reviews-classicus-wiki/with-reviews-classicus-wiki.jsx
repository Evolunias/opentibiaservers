import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-wiki');
}

export default function WithReviewsClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-wiki" />;
}
