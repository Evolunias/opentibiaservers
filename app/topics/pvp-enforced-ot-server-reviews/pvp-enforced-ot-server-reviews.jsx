import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-reviews');
}

export default function PvpEnforcedOtServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-reviews" />;
}
