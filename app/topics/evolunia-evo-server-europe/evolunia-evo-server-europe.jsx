import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-europe');
}

export default function EvoluniaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-europe" />;
}
