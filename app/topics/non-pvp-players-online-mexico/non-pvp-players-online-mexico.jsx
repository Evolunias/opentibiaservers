import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-mexico');
}

export default function NonPvpPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-mexico" />;
}
