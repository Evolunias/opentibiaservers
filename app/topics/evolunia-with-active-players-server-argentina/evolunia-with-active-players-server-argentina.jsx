import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-argentina');
}

export default function EvoluniaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-argentina" />;
}
