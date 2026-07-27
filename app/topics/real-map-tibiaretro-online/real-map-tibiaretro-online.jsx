import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-online');
}

export default function RealMapTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-online" />;
}
