import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-sweden');
}

export default function NoResetPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-sweden" />;
}
