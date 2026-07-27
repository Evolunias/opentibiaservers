import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-online');
}

export default function TibiaPrivateServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-online" />;
}
