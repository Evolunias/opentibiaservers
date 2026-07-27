import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-online');
}

export default function RealMapRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-online" />;
}
