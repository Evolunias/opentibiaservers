import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-wiki');
}

export default function WithReviewsClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-wiki" />;
}
