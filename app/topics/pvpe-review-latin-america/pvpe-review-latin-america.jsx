import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-latin-america');
}

export default function PvpeReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-latin-america" />;
}
