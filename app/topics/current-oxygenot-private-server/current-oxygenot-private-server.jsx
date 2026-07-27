import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-private-server');
}

export default function CurrentOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-private-server" />;
}
