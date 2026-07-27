import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-online');
}

export default function RealMapDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-online" />;
}
