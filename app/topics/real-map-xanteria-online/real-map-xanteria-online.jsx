import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-online');
}

export default function RealMapXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-online" />;
}
