import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-france');
}

export default function MidhemWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-france" />;
}
