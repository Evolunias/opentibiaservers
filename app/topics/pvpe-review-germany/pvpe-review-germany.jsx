import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-germany');
}

export default function PvpeReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-germany" />;
}
