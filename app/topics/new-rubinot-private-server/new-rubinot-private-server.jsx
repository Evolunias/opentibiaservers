import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-private-server');
}

export default function NewRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-private-server" />;
}
