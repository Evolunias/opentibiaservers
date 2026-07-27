import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-reviews');
}

export default function NtoStarReviewsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-reviews" />;
}
