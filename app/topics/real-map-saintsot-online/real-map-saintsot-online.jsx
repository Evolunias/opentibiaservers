import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-online');
}

export default function RealMapSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-online" />;
}
