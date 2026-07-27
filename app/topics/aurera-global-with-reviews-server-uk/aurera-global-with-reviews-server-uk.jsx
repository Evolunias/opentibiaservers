import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-uk');
}

export default function AureraGlobalWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-uk" />;
}
