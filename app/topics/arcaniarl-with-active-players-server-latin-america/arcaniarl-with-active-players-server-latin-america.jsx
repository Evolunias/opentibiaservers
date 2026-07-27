import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-active-players-server-latin-america');
}

export default function ArcaniarlWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-active-players-server-latin-america" />;
}
