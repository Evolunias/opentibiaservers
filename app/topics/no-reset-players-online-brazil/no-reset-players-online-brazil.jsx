import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-brazil');
}

export default function NoResetPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-brazil" />;
}
