import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-players-online');
}

export default function NoxiousotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-players-online" />;
}
