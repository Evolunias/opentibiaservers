import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-south-america');
}

export default function LowExpPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-south-america" />;
}
