import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-argentina');
}

export default function TibiaraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-argentina" />;
}
