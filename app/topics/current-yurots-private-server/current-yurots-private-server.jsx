import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-private-server');
}

export default function CurrentYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-private-server" />;
}
