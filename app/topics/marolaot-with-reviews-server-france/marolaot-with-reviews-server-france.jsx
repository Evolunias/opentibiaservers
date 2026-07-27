import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-france');
}

export default function MarolaotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-france" />;
}
