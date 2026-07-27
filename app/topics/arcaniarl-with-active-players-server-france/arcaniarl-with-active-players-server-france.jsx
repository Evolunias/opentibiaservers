import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-active-players-server-france');
}

export default function ArcaniarlWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-active-players-server-france" />;
}
