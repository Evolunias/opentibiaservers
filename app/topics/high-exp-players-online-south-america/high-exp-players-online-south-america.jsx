import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-south-america');
}

export default function HighExpPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-south-america" />;
}
