import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-players-online');
}

export default function CanobPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="canob-players-online" />;
}
