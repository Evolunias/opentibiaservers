import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-south-america');
}

export default function NoResetPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-south-america" />;
}
