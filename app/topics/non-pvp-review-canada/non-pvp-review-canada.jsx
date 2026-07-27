import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-canada');
}

export default function NonPvpReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-canada" />;
}
