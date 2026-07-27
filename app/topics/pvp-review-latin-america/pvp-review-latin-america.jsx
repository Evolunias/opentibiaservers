import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-latin-america');
}

export default function PvpReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-latin-america" />;
}
