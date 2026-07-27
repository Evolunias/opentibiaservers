import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-rubinot-server');
}

export default function BaiakRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-rubinot-server" />;
}
