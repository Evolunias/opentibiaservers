import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-south-america');
}

export default function PvpPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-south-america" />;
}
