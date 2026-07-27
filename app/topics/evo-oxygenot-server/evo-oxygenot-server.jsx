import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-oxygenot-server');
}

export default function EvoOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-oxygenot-server" />;
}
