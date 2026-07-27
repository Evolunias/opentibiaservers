import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-server');
}

export default function ActiveRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-server" />;
}
