import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-france');
}

export default function OxygenotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-france" />;
}
