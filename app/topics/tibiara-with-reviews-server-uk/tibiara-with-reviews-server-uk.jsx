import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-uk');
}

export default function TibiaraWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-uk" />;
}
