import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-canada');
}

export default function HighExpPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-canada" />;
}
