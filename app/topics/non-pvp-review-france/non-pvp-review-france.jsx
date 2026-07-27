import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-review-france');
}

export default function NonPvpReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-review-france" />;
}
