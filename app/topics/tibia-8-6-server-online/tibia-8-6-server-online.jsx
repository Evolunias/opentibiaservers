import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-online');
}

export default function Tibia86ServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-online" />;
}
