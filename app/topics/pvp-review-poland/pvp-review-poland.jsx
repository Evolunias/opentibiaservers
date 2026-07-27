import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-poland');
}

export default function PvpReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-poland" />;
}
