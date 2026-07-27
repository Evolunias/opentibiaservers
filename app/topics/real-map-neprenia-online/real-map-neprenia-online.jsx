import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-online');
}

export default function RealMapNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-online" />;
}
