import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-players-online');
}

export default function SerenityPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="serenity-players-online" />;
}
