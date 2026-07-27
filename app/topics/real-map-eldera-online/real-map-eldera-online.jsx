import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-online');
}

export default function RealMapElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-online" />;
}
