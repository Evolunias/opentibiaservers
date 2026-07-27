import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-usa');
}

export default function RubinotWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-usa" />;
}
