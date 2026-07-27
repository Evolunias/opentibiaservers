import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-reviews-tibia-private-server');
}

export default function Tibia100WithReviewsTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-reviews-tibia-private-server" />;
}
