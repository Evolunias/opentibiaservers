import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-usa');
}

export default function MiracleEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-usa" />;
}
