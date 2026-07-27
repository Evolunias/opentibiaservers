import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-online');
}

export default function RealMapThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-online" />;
}
