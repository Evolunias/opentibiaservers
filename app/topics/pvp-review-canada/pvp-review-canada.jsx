import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-canada');
}

export default function PvpReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-canada" />;
}
