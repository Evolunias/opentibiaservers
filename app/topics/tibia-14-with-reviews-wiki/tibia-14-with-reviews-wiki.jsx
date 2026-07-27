import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-reviews-wiki');
}

export default function Tibia14WithReviewsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-reviews-wiki" />;
}
