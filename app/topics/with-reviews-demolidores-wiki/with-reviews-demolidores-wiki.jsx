import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-wiki');
}

export default function WithReviewsDemolidoresWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-wiki" />;
}
