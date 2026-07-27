import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-europe');
}

export default function LowExpPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-europe" />;
}
