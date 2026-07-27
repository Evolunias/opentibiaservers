import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-france');
}

export default function ThorniaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-france" />;
}
