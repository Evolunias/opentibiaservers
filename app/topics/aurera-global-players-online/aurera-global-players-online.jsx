import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-players-online');
}

export default function AureraGlobalPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-players-online" />;
}
