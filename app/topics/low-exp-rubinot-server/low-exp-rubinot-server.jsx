import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-rubinot-server');
}

export default function LowExpRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-rubinot-server" />;
}
