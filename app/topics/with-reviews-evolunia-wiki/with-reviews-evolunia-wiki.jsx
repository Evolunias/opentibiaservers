import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-wiki');
}

export default function WithReviewsEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-wiki" />;
}
