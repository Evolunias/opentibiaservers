import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-mexico');
}

export default function NoResetPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-mexico" />;
}
