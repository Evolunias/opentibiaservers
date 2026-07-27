import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-with-reviews-server');
}

export default function Noxiousot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-with-reviews-server" />;
}
