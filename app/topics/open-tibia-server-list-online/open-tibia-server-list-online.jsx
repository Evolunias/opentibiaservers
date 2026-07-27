import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-online');
}

export default function OpenTibiaServerListOnlineKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-online" />;
}
