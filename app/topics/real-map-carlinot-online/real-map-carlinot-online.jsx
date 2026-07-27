import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-online');
}

export default function RealMapCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-online" />;
}
