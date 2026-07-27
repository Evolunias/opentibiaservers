import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-france');
}

export default function NostaltherWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-france" />;
}
