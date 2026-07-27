import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-france');
}

export default function MiracleWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-france" />;
}
