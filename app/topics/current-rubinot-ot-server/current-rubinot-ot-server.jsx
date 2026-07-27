import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-ot-server');
}

export default function CurrentRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-ot-server" />;
}
