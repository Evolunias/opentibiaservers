import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-europe');
}

export default function NoResetPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-europe" />;
}
