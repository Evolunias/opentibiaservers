import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-wiki');
}

export default function WithReviewsMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-wiki" />;
}
