import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online');
}

export default function RealMapDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online" />;
}
