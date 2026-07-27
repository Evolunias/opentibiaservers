import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-latin-america');
}

export default function KasteriaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-latin-america" />;
}
