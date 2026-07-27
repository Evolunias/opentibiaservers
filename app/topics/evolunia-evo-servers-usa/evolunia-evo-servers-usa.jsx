import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-servers-usa');
}

export default function EvoluniaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-servers-usa" />;
}
