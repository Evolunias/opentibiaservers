import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-wiki');
}

export default function WithReviewsArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-wiki" />;
}
