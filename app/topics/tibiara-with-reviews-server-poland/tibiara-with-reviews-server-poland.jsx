import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-poland');
}

export default function TibiaraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-poland" />;
}
