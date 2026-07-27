import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-argentina');
}

export default function MiracleEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-argentina" />;
}
