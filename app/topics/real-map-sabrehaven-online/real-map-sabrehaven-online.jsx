import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-online');
}

export default function RealMapSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-online" />;
}
