import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-wiki');
}

export default function WithReviewsCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-wiki" />;
}
