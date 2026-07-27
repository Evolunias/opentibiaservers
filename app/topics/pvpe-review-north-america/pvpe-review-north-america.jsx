import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-north-america');
}

export default function PvpeReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-north-america" />;
}
