import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-mexico');
}

export default function TibiantisWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-mexico" />;
}
