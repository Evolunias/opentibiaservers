import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-server');
}

export default function LowrateRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-server" />;
}
