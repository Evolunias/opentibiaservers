import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-private-server');
}

export default function ActiveRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-private-server" />;
}
