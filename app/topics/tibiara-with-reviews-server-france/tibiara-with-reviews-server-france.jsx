import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-france');
}

export default function TibiaraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-france" />;
}
