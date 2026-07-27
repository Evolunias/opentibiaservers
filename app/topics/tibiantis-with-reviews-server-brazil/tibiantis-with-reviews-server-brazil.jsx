import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-brazil');
}

export default function TibiantisWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-brazil" />;
}
