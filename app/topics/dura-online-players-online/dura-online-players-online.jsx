import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-players-online');
}

export default function DuraOnlinePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="dura-online-players-online" />;
}
