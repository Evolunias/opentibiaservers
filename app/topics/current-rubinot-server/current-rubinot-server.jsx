import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-server');
}

export default function CurrentRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-server" />;
}
