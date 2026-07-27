import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-with-reviews-server-mexico');
}

export default function NoxiousotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-with-reviews-server-mexico" />;
}
