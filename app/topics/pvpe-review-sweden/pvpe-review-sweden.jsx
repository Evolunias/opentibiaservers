import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-sweden');
}

export default function PvpeReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-sweden" />;
}
