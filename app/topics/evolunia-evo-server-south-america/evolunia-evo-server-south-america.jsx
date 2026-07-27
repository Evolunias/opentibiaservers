import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-south-america');
}

export default function EvoluniaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-south-america" />;
}
