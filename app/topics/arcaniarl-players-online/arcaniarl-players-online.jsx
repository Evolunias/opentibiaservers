import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-players-online');
}

export default function ArcaniarlPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-players-online" />;
}
