import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-servers-brazil');
}

export default function MiracleEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-servers-brazil" />;
}
