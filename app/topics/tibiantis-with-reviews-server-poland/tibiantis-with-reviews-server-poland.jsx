import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-reviews-server-poland');
}

export default function TibiantisWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-reviews-server-poland" />;
}
