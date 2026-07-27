import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-players-online');
}

export default function ThorniaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="thornia-players-online" />;
}
