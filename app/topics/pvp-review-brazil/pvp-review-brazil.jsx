import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-brazil');
}

export default function PvpReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-brazil" />;
}
