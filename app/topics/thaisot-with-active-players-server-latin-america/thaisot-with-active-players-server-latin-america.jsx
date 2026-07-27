import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-latin-america');
}

export default function ThaisotWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-latin-america" />;
}
