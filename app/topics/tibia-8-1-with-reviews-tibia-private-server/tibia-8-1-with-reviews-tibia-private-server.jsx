import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-reviews-tibia-private-server');
}

export default function Tibia81WithReviewsTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-reviews-tibia-private-server" />;
}
