import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-4-with-reviews-server');
}

export default function AureraGlobal74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-4-with-reviews-server" />;
}
