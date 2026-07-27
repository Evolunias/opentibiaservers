import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-private-server');
}

export default function BestOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-private-server" />;
}
