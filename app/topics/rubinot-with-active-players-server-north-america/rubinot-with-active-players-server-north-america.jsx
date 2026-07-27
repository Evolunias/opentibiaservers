import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-active-players-server-north-america');
}

export default function RubinotWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-active-players-server-north-america" />;
}
