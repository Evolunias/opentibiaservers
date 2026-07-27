import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-with-reviews-server');
}

export default function Noxiousot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-with-reviews-server" />;
}
