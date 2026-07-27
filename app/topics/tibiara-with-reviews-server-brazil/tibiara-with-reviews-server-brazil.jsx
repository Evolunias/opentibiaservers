import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-brazil');
}

export default function TibiaraWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-brazil" />;
}
