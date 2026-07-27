import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-6-with-reviews-server');
}

export default function Noxiousot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-6-with-reviews-server" />;
}
