import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-uk');
}

export default function NonPvpReviewUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-uk" />;
}
