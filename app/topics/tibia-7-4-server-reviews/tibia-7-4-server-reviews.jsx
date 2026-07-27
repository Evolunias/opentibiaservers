import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-reviews');
}

export default function Tibia74ServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-reviews" />;
}
