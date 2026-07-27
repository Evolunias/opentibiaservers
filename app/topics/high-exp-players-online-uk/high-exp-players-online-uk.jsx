import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-uk');
}

export default function HighExpPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-uk" />;
}
