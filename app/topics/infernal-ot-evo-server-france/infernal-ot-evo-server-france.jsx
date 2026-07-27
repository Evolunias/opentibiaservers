import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-france');
}

export default function InfernalOtEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-france" />;
}
