import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-latin-america');
}

export default function MiracleEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-latin-america" />;
}
