import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-argentina');
}

export default function PvpeReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-argentina" />;
}
