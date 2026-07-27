import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-canada');
}

export default function TibiantisWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-canada" />;
}
