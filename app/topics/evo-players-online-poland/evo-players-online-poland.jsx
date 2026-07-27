import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-poland');
}

export default function EvoPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-poland" />;
}
