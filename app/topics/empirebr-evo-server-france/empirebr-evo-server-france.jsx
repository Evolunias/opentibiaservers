import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-france');
}

export default function EmpirebrEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-france" />;
}
