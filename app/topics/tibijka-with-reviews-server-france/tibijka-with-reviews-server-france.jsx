import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-france');
}

export default function TibijkaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-france" />;
}
