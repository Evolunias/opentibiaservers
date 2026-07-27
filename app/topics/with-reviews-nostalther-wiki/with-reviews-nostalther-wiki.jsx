import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-wiki');
}

export default function WithReviewsNostaltherWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-wiki" />;
}
