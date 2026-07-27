import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-argentina');
}

export default function PvpEnforcedReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-argentina" />;
}
