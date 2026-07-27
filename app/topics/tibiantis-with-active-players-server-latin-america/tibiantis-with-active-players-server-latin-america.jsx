import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-latin-america');
}

export default function TibiantisWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-latin-america" />;
}
