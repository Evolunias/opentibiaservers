import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-with-reviews-server');
}

export default function Noxiousot13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-with-reviews-server" />;
}
