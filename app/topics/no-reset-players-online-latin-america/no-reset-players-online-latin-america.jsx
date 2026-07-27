import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-latin-america');
}

export default function NoResetPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-latin-america" />;
}
