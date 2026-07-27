import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-canada');
}

export default function PvpeReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-canada" />;
}
