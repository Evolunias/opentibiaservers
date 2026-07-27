import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-oxygenot-server');
}

export default function LowExpOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-oxygenot-server" />;
}
