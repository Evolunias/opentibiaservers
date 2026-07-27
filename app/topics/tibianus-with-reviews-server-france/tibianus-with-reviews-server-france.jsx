import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-france');
}

export default function TibianusWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-france" />;
}
