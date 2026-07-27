import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-germany');
}

export default function MiracleEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-germany" />;
}
