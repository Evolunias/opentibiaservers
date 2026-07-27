import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-wiki');
}

export default function WithReviewsMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-wiki" />;
}
