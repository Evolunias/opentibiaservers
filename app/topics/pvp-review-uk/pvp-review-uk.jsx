import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-uk');
}

export default function PvpReviewUkKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-uk" />;
}
