import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-ots');
}

export default function RealMapArchlightOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-ots" />;
}
