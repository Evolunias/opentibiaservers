import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-france');
}

export default function EvoluniaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-france" />;
}
