import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-wiki');
}

export default function WithReviewsBlazeraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-wiki" />;
}
