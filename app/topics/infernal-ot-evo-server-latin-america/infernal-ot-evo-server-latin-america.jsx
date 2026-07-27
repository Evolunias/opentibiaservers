import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-latin-america');
}

export default function InfernalOtEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-latin-america" />;
}
