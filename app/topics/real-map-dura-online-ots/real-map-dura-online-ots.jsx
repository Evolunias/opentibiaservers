import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-ots');
}

export default function RealMapDuraOnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-ots" />;
}
