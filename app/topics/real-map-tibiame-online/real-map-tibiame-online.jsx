import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-online');
}

export default function RealMapTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-online" />;
}
