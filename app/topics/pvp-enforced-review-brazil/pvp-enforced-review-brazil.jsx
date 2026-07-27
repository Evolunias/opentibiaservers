import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-brazil');
}

export default function PvpEnforcedReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-brazil" />;
}
