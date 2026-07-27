import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-players-online');
}

export default function NepreniaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="neprenia-players-online" />;
}
