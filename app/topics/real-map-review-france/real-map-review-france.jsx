import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-review-france');
}

export default function RealMapReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="real-map-review-france" />;
}
