import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-europe');
}

export default function PvpeReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-europe" />;
}
