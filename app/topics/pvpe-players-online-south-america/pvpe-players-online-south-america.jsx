import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-south-america');
}

export default function PvpePlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-south-america" />;
}
