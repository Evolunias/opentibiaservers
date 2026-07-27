import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-argentina');
}

export default function NoResetPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-argentina" />;
}
