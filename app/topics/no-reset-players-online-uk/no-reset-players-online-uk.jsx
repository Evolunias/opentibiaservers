import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-uk');
}

export default function NoResetPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-uk" />;
}
