import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-ot-server');
}

export default function NewRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-ot-server" />;
}
