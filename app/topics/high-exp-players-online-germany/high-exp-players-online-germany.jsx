import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-germany');
}

export default function HighExpPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-germany" />;
}
