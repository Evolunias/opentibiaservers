import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-france');
}

export default function AlasteraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-france" />;
}
