import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-wiki');
}

export default function WithReviewsAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-wiki" />;
}
