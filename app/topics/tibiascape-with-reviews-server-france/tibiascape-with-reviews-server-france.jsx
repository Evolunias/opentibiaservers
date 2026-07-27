import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-france');
}

export default function TibiascapeWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-france" />;
}
