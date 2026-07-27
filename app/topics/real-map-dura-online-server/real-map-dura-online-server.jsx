import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-server');
}

export default function RealMapDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-server" />;
}
