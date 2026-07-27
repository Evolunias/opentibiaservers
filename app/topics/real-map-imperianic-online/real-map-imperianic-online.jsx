import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-imperianic-online');
}

export default function RealMapImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-imperianic-online" />;
}
