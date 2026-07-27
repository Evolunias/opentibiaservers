import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-review-mexico');
}

export default function PvpReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-review-mexico" />;
}
