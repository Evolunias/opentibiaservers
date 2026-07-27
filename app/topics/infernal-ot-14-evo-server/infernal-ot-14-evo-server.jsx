import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-evo-server');
}

export default function InfernalOt14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-evo-server" />;
}
