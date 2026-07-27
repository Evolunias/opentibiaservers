import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-6-with-reviews-server');
}

export default function Noxiousot86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-6-with-reviews-server" />;
}
