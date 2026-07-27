import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-usa');
}

export default function LowExpPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-usa" />;
}
