import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-rubinot-server');
}

export default function EvoRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-rubinot-server" />;
}
