import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-mexico');
}

export default function AureraGlobalWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-mexico" />;
}
