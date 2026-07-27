import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-poland');
}

export default function PvpEnforcedReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-poland" />;
}
