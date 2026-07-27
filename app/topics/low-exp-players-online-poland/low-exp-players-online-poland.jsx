import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-poland');
}

export default function LowExpPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-poland" />;
}
