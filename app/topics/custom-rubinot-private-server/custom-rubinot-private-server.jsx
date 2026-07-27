import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-private-server');
}

export default function CustomRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-private-server" />;
}
