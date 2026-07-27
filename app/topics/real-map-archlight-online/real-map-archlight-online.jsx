import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-online');
}

export default function RealMapArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-online" />;
}
