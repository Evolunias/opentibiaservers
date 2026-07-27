import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-argentina');
}

export default function InfernalOtEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-argentina" />;
}
