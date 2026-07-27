import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-north-america');
}

export default function LowExpPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-north-america" />;
}
