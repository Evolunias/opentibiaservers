import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-usa');
}

export default function NoResetPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-usa" />;
}
