import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-ot-server');
}

export default function ActiveRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-ot-server" />;
}
