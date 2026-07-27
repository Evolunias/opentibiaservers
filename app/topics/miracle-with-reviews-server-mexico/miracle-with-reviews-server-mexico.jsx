import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-mexico');
}

export default function MiracleWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-mexico" />;
}
