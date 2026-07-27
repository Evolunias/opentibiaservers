import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-latin-america');
}

export default function CanobWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-latin-america" />;
}
