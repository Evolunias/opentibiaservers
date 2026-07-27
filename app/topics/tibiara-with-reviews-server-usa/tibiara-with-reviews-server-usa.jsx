import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-usa');
}

export default function TibiaraWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-usa" />;
}
