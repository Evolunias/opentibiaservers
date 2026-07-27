import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-usa');
}

export default function NostaltherWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-usa" />;
}
