import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-latin-america');
}

export default function TibiaraWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-latin-america" />;
}
