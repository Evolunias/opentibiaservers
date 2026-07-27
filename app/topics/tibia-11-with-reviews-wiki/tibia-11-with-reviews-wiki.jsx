import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-wiki');
}

export default function Tibia11WithReviewsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-wiki" />;
}
