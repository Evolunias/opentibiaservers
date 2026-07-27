import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-reviews');
}

export default function Tibia1098ServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-reviews" />;
}
