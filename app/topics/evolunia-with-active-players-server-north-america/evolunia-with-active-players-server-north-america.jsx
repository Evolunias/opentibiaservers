import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-north-america');
}

export default function EvoluniaWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-north-america" />;
}
