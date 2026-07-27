import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-reviews-server-north-america');
}

export default function NostaltherWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-reviews-server-north-america" />;
}
