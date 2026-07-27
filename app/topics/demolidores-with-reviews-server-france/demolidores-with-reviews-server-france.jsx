import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-france');
}

export default function DemolidoresWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-france" />;
}
