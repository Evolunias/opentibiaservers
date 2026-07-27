import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-private-server');
}

export default function LowrateYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-private-server" />;
}
