import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-sweden');
}

export default function NonPvpReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-sweden" />;
}
