import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-france');
}

export default function ElderaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-france" />;
}
