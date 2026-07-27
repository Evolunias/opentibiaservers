import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-france');
}

export default function KasteriaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-france" />;
}
