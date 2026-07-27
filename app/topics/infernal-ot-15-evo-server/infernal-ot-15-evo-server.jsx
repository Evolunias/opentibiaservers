import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-evo-server');
}

export default function InfernalOt15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-evo-server" />;
}
