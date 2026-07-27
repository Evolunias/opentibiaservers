import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-online');
}

export default function RealMapNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-online" />;
}
