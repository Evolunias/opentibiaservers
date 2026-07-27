import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-online');
}

export default function TibiaOtServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-online" />;
}
