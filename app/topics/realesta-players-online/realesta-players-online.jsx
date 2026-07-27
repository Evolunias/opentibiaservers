import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-players-online');
}

export default function RealestaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="realesta-players-online" />;
}
