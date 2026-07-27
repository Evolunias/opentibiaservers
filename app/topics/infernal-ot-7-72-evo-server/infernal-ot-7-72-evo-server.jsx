import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-72-evo-server');
}

export default function InfernalOt772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-72-evo-server" />;
}
