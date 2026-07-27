import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-players-online');
}

export default function UnlinePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="unline-players-online" />;
}
