import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-wiki');
}

export default function WithReviewsThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-wiki" />;
}
