import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-private-server');
}

export default function OfficialRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-private-server" />;
}
