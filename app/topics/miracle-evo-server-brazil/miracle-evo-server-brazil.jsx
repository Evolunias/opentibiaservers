import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-brazil');
}

export default function MiracleEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-brazil" />;
}
