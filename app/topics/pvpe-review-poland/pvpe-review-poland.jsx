import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-poland');
}

export default function PvpeReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-poland" />;
}
