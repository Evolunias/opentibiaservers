import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-online');
}

export default function RealMapCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-online" />;
}
