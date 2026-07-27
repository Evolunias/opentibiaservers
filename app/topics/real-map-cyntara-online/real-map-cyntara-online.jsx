import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-online');
}

export default function RealMapCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-online" />;
}
