import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-reviews');
}

export default function KasteriaReviewsKeywordPage() {
  return <StaticKeywordPage slug="kasteria-reviews" />;
}
