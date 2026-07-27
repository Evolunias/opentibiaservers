import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-reviews');
}

export default function TibiaraReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-reviews" />;
}
