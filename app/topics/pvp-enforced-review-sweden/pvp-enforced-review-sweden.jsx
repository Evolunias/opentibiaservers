import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-sweden');
}

export default function PvpEnforcedReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-sweden" />;
}
