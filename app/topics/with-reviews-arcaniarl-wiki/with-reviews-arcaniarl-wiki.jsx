import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-wiki');
}

export default function WithReviewsArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-wiki" />;
}
