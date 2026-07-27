import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-south-america');
}

export default function PvpeReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-south-america" />;
}
