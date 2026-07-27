import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-usa');
}

export default function InfernalOtEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-usa" />;
}
