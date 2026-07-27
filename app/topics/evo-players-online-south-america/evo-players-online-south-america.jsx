import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-players-online-south-america');
}

export default function EvoPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-players-online-south-america" />;
}
