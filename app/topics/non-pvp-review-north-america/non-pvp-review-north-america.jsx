import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-north-america');
}

export default function NonPvpReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-north-america" />;
}
