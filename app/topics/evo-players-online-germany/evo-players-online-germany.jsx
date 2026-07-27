import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-germany');
}

export default function EvoPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-germany" />;
}
