import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-evo-server');
}

export default function InfernalOt13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-evo-server" />;
}
