import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-uk');
}

export default function PvpeReviewUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-uk" />;
}
