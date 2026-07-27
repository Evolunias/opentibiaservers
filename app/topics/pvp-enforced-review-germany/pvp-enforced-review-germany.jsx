import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-germany');
}

export default function PvpEnforcedReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-germany" />;
}
