import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-private-server');
}

export default function RubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-private-server" />;
}
