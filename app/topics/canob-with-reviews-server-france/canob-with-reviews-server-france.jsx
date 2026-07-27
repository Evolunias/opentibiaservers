import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-france');
}

export default function CanobWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-france" />;
}
