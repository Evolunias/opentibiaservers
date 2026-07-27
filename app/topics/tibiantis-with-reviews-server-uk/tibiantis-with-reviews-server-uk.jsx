import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-uk');
}

export default function TibiantisWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-uk" />;
}
