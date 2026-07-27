import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-with-reviews-server');
}

export default function Noxiousot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-with-reviews-server" />;
}
