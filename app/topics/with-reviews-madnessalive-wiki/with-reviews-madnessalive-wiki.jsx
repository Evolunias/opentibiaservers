import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-madnessalive-wiki');
}

export default function WithReviewsMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-madnessalive-wiki" />;
}
