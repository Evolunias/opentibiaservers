import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-germany');
}

export default function TibiaraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-germany" />;
}
