import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-argentina');
}

export default function MarolaotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-argentina" />;
}
