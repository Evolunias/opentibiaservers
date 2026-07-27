import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-usa');
}

export default function PvpReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-usa" />;
}
