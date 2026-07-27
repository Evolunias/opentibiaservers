import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-mexico');
}

export default function EvoPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-mexico" />;
}
