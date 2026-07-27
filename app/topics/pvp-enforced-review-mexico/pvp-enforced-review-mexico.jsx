import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-mexico');
}

export default function PvpEnforcedReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-mexico" />;
}
