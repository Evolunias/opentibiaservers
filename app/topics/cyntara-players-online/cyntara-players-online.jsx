import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-players-online');
}

export default function CyntaraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="cyntara-players-online" />;
}
