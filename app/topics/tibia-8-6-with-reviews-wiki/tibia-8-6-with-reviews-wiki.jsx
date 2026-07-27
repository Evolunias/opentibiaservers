import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-reviews-wiki');
}

export default function Tibia86WithReviewsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-reviews-wiki" />;
}
