import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-france');
}

export default function NepreniaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-france" />;
}
