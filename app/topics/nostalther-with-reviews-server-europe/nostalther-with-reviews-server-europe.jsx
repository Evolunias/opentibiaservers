import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-europe');
}

export default function NostaltherWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-europe" />;
}
