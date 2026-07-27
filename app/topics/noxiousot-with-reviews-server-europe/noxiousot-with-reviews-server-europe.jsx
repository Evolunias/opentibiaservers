import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-europe');
}

export default function NoxiousotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-europe" />;
}
