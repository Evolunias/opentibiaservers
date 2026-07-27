import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-online');
}

export default function Tibia74ServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-online" />;
}
