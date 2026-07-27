import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-evo-server-germany');
}

export default function InfernalOtEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-evo-server-germany" />;
}
