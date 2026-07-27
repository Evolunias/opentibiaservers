import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-latin-america');
}

export default function RubinotWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-latin-america" />;
}
