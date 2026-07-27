import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-canada');
}

export default function InfernalOtEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-canada" />;
}
