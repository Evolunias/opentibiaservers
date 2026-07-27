import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-online');
}

export default function RealMapMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-online" />;
}
