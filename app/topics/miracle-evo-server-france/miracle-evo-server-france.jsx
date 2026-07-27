import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-france');
}

export default function MiracleEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-france" />;
}
