import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-mexico');
}

export default function MiracleEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-mexico" />;
}
