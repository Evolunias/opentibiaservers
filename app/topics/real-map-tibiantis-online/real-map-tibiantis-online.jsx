import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-online');
}

export default function RealMapTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-online" />;
}
