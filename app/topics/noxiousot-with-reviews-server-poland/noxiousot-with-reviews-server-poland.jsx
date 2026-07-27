import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-poland');
}

export default function NoxiousotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-poland" />;
}
