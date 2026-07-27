import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-latin-america');
}

export default function DemolidoresWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-latin-america" />;
}
