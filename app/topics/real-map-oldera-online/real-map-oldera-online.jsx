import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-online');
}

export default function RealMapOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-online" />;
}
