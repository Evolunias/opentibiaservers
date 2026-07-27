import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-players-online');
}

export default function TibiaretroPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-players-online" />;
}
