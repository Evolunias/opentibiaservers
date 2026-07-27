import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-france');
}

export default function ShadowcoresWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-france" />;
}
