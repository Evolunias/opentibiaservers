import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-latin-america');
}

export default function EvoPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-latin-america" />;
}
