import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-with-reviews-server-france');
}

export default function OriginaltibiaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-with-reviews-server-france" />;
}
