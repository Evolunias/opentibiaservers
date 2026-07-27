import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-marolaot-online');
}

export default function RealMapMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-marolaot-online" />;
}
