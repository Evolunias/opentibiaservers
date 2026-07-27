import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-argentina');
}

export default function EvoluniaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-argentina" />;
}
