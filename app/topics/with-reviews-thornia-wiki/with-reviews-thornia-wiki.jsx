import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-wiki');
}

export default function WithReviewsThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-wiki" />;
}
