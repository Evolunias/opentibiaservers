import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-active-players-server-north-america');
}

export default function ArcaniarlWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-active-players-server-north-america" />;
}
