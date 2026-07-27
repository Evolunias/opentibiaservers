import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-wiki');
}

export default function WithReviewsDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-wiki" />;
}
