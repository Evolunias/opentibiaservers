import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-private-server');
}

export default function BestRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-private-server" />;
}
