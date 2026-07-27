import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-servers-brazil');
}

export default function InfernalOtEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-servers-brazil" />;
}
