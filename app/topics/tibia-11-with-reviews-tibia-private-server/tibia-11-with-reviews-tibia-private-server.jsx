import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-reviews-tibia-private-server');
}

export default function Tibia11WithReviewsTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-reviews-tibia-private-server" />;
}
