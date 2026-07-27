import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-usa');
}

export default function TibiantisWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-usa" />;
}
