import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-brazil');
}

export default function InfernalOtEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-brazil" />;
}
