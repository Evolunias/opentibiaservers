import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-active-players-server-usa');
}

export default function ArcaniarlWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-active-players-server-usa" />;
}
