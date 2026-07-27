import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-evo-server');
}

export default function InfernalOt84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-evo-server" />;
}
