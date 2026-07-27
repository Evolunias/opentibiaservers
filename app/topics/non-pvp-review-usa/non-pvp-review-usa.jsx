import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-usa');
}

export default function NonPvpReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-usa" />;
}
