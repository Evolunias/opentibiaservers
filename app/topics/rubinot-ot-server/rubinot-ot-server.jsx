import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-ot-server');
}

export default function RubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-ot-server" />;
}
