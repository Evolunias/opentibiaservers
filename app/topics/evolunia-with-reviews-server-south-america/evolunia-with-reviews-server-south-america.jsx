import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-south-america');
}

export default function EvoluniaWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-south-america" />;
}
