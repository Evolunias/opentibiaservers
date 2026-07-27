import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-france');
}

export default function TibiantisWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-france" />;
}
