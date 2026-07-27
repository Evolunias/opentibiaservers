import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-canada');
}

export default function TibiaraWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-canada" />;
}
