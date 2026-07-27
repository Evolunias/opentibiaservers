import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-usa');
}

export default function PvpeReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-usa" />;
}
