import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-private-server');
}

export default function TopRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-private-server" />;
}
