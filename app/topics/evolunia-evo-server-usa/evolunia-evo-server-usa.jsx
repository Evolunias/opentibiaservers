import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-usa');
}

export default function EvoluniaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-usa" />;
}
