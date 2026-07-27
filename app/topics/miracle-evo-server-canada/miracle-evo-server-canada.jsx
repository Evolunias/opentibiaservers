import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-canada');
}

export default function MiracleEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-canada" />;
}
