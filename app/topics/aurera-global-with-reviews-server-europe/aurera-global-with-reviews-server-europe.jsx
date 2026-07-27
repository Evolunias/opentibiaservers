import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-europe');
}

export default function AureraGlobalWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-europe" />;
}
