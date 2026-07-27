import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-france');
}

export default function RubinotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-france" />;
}
