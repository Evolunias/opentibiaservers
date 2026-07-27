import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-evo-server');
}

export default function InfernalOt80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-evo-server" />;
}
