import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-france');
}

export default function MediviaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-france" />;
}
