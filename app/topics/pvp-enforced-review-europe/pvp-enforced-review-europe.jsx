import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-review-europe');
}

export default function PvpEnforcedReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-review-europe" />;
}
