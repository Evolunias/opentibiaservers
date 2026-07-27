import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-europe');
}

export default function HighExpPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-europe" />;
}
