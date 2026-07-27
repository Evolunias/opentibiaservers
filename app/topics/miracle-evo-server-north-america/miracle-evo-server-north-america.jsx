import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-north-america');
}

export default function MiracleEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-north-america" />;
}
