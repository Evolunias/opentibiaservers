import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-evo-server');
}

export default function InfernalOt71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-evo-server" />;
}
