import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-oxygenot-server');
}

export default function HighExpOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-oxygenot-server" />;
}
