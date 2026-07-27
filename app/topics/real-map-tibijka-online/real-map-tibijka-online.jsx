import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-online');
}

export default function RealMapTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-online" />;
}
