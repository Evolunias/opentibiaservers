import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-canada');
}

export default function RubinotWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-canada" />;
}
