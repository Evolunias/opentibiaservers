import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-wiki');
}

export default function WithReviewsLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-wiki" />;
}
