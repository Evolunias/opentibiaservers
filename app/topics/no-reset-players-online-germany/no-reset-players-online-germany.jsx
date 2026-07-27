import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-germany');
}

export default function NoResetPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-germany" />;
}
