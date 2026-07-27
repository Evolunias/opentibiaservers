import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-france');
}

export default function EvoluniaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-france" />;
}
