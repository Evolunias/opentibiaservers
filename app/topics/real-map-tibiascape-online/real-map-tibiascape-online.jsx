import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-online');
}

export default function RealMapTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-online" />;
}
