import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-online');
}

export default function RealMapRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-online" />;
}
