import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-active-players-server-uk');
}

export default function ArcaniarlWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-active-players-server-uk" />;
}
