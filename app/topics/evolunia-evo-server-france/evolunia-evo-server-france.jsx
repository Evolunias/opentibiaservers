import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-france');
}

export default function EvoluniaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-france" />;
}
