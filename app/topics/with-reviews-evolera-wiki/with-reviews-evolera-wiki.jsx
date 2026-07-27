import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-wiki');
}

export default function WithReviewsEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-wiki" />;
}
