import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-ot-server');
}

export default function CustomRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-ot-server" />;
}
