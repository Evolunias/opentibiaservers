import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-latin-america');
}

export default function TibiameWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-latin-america" />;
}
