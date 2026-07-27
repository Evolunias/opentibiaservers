import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-reviews');
}

export default function Tibia13ServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-reviews" />;
}
