import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-uk');
}

export default function LowExpPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-uk" />;
}
