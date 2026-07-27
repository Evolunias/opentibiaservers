import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-review-france');
}

export default function PvpeReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-review-france" />;
}
