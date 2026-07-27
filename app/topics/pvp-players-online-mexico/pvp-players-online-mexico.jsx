import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-mexico');
}

export default function PvpPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-mexico" />;
}
