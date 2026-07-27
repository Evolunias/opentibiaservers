import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-servers-usa');
}

export default function InfernalOtEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-servers-usa" />;
}
