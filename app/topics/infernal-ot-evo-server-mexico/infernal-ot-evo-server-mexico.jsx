import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-mexico');
}

export default function InfernalOtEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-mexico" />;
}
