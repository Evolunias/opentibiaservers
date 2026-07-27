import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-online');
}

export default function TibiaCustomServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-online" />;
}
