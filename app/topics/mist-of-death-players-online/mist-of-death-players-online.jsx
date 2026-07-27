import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-players-online');
}

export default function MistOfDeathPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-players-online" />;
}
