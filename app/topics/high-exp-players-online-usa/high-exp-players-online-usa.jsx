import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-usa');
}

export default function HighExpPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-usa" />;
}
