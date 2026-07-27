import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-reviews');
}

export default function TibiaPrivateServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-reviews" />;
}
