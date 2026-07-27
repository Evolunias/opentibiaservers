import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-latin-america');
}

export default function TibijkaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-latin-america" />;
}
