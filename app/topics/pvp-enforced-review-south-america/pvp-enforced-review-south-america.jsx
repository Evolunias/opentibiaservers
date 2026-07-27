import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-south-america');
}

export default function PvpEnforcedReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-south-america" />;
}
