import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-mexico');
}

export default function NostaltherWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-mexico" />;
}
