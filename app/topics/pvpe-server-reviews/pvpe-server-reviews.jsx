import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-reviews');
}

export default function PvpeServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-reviews" />;
}
