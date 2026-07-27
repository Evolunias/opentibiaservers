import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-north-america');
}

export default function PvpEnforcedReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-north-america" />;
}
