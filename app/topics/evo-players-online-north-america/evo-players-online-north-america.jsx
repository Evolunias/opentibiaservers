import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-north-america');
}

export default function EvoPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-north-america" />;
}
