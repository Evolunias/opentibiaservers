import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-poland');
}

export default function NonPvpReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-poland" />;
}
