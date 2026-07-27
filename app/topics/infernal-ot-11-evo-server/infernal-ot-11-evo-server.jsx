import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-evo-server');
}

export default function InfernalOt11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-evo-server" />;
}
