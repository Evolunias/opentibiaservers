import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-north-america');
}

export default function PvpReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-north-america" />;
}
