import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-wiki');
}

export default function WithReviewsCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-wiki" />;
}
