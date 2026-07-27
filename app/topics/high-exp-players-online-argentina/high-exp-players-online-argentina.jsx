import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-argentina');
}

export default function HighExpPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-argentina" />;
}
