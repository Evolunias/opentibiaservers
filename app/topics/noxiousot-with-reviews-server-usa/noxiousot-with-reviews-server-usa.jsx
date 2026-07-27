import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-usa');
}

export default function NoxiousotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-usa" />;
}
