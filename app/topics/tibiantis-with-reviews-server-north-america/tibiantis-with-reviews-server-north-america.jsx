import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-north-america');
}

export default function TibiantisWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-north-america" />;
}
