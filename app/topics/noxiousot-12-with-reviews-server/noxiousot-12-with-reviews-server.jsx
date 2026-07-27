import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-with-reviews-server');
}

export default function Noxiousot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-with-reviews-server" />;
}
