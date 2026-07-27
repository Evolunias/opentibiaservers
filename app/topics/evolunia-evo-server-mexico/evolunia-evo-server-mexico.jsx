import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-mexico');
}

export default function EvoluniaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-mexico" />;
}
