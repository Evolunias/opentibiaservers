import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-reviews-server-france');
}

export default function MadnessaliveWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-reviews-server-france" />;
}
