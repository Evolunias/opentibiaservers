import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-private-server');
}

export default function CurrentOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-private-server" />;
}
