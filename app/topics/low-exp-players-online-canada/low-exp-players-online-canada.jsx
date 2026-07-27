import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-canada');
}

export default function LowExpPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-canada" />;
}
