import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-north-america');
}

export default function NoResetPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-north-america" />;
}
