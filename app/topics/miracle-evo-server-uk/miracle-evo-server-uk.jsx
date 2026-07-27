import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-uk');
}

export default function MiracleEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-uk" />;
}
