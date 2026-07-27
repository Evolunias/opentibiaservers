import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-germany');
}

export default function PvpReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-germany" />;
}
