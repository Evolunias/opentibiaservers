import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ruthless-chaos-wiki');
}

export default function WithReviewsRuthlessChaosWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ruthless-chaos-wiki" />;
}
