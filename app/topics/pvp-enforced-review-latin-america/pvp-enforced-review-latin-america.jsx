import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-latin-america');
}

export default function PvpEnforcedReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-latin-america" />;
}
