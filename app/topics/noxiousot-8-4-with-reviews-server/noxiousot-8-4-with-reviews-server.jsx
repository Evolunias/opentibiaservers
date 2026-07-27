import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-with-reviews-server');
}

export default function Noxiousot84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-with-reviews-server" />;
}
