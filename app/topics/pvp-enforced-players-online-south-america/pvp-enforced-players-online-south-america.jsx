import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-south-america');
}

export default function PvpEnforcedPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-south-america" />;
}
