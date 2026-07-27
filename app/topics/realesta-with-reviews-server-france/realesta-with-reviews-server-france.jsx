import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-france');
}

export default function RealestaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-france" />;
}
