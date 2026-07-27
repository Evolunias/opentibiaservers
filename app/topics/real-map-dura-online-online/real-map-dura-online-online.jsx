import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-online');
}

export default function RealMapDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-online" />;
}
