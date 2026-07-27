import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-private-server');
}

export default function CurrentCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-private-server" />;
}
