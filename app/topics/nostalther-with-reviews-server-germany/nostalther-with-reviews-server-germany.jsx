import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-germany');
}

export default function NostaltherWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-germany" />;
}
