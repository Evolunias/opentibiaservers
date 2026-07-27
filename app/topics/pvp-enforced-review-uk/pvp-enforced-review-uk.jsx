import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-uk');
}

export default function PvpEnforcedReviewUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-uk" />;
}
