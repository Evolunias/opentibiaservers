import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-france');
}

export default function OlderaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-france" />;
}
