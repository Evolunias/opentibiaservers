import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-with-reviews-server');
}

export default function AureraGlobal100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-with-reviews-server" />;
}
