import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-mexico');
}

export default function TibiaraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-mexico" />;
}
