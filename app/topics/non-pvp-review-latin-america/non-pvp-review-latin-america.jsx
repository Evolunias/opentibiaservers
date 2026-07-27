import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-latin-america');
}

export default function NonPvpReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-latin-america" />;
}
