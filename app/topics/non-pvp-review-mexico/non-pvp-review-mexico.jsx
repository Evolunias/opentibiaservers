import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-mexico');
}

export default function NonPvpReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-mexico" />;
}
