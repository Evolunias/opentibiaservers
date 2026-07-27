import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nilot-wiki');
}

export default function WithReviewsNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nilot-wiki" />;
}
