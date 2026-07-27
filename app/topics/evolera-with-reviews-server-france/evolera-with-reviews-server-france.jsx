import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-reviews-server-france');
}

export default function EvoleraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-reviews-server-france" />;
}
