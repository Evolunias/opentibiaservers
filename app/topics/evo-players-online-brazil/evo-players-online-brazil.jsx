import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-brazil');
}

export default function EvoPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-brazil" />;
}
