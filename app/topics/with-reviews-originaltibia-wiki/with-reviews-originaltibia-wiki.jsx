import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-wiki');
}

export default function WithReviewsOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-wiki" />;
}
