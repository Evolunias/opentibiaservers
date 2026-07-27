import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-canada');
}

export default function NoResetPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-canada" />;
}
