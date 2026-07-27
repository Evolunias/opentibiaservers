import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-argentina');
}

export default function NonPvpReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-argentina" />;
}
