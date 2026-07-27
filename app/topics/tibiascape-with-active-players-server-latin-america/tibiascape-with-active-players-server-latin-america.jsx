import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-latin-america');
}

export default function TibiascapeWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-latin-america" />;
}
