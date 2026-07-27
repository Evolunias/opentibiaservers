import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-uk');
}

export default function RubinotWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-uk" />;
}
