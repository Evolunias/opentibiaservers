import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-germany');
}

export default function MarolaotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-germany" />;
}
