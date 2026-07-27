import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-active-players-server-latin-america');
}

export default function ThorniaWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-active-players-server-latin-america" />;
}
