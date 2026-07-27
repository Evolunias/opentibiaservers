import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-ot');
}

export default function RealMapArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-ot" />;
}
