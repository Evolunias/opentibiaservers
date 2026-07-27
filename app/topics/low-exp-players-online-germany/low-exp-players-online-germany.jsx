import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-germany');
}

export default function LowExpPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-germany" />;
}
