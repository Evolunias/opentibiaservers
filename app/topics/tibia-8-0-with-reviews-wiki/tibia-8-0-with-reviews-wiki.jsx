import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-reviews-wiki');
}

export default function Tibia80WithReviewsWikiKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-reviews-wiki" />;
}
