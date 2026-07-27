import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-latin-america');
}

export default function AlasteraWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-latin-america" />;
}
