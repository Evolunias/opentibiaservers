import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-online');
}

export default function PvpeServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-online" />;
}
