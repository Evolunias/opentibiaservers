import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-poland');
}

export default function MarolaotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-poland" />;
}
