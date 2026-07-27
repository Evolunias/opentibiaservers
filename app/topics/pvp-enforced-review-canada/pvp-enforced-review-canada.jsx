import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-canada');
}

export default function PvpEnforcedReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-canada" />;
}
