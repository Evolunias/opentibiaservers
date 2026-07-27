import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-uk');
}

export default function NoxiousotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-uk" />;
}
