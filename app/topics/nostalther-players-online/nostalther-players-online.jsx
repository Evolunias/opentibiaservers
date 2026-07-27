import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-players-online');
}

export default function NostaltherPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="nostalther-players-online" />;
}
