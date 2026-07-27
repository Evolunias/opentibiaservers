import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-argentina');
}

export default function NostaltherWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-argentina" />;
}
