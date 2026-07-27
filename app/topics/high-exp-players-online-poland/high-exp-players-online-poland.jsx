import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-poland');
}

export default function HighExpPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-poland" />;
}
