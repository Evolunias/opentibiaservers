import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-online');
}

export default function RealMapNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-online" />;
}
