import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-poland');
}

export default function NoResetPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-poland" />;
}
