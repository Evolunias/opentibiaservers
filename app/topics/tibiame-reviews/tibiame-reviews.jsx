import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-reviews');
}

export default function TibiameReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-reviews" />;
}
