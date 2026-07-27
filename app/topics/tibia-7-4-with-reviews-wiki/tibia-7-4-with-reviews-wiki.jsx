import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-reviews-wiki');
}

export default function Tibia74WithReviewsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-reviews-wiki" />;
}
