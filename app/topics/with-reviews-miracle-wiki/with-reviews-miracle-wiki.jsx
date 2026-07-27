import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-wiki');
}

export default function WithReviewsMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-wiki" />;
}
