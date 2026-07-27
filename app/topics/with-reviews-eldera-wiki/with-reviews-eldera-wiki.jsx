import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-wiki');
}

export default function WithReviewsElderaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-wiki" />;
}
