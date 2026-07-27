import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-online');
}

export default function RealMapMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-online" />;
}
