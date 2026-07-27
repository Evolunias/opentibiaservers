import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-online');
}

export default function Tibia13ServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-online" />;
}
