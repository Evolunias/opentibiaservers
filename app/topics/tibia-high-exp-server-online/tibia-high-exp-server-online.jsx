import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-online');
}

export default function TibiaHighExpServerOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-online" />;
}
