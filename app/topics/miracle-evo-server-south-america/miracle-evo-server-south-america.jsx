import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-south-america');
}

export default function MiracleEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-south-america" />;
}
