import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-players-online');
}

export default function TibianusPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibianus-players-online" />;
}
