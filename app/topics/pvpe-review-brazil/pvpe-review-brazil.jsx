import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-brazil');
}

export default function PvpeReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-brazil" />;
}
