import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-usa');
}

export default function PvpEnforcedReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-usa" />;
}
