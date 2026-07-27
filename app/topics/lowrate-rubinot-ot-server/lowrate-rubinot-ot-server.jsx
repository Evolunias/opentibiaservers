import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-ot-server');
}

export default function LowrateRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-ot-server" />;
}
