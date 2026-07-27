import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-players-online');
}

export default function NilotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="nilot-players-online" />;
}
