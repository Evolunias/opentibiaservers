import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-brazil');
}

export default function NonPvpReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-brazil" />;
}
