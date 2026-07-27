import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-with-reviews-server');
}

export default function Noxiousot96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-with-reviews-server" />;
}
