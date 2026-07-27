import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-france');
}

export default function RealeraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-france" />;
}
