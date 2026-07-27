import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-sweden');
}

export default function InfernalOtEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-sweden" />;
}
