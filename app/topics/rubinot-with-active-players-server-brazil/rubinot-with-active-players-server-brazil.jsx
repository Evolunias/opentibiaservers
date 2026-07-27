import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-brazil');
}

export default function RubinotWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-brazil" />;
}
