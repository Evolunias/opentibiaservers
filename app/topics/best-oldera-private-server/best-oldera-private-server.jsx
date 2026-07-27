import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-private-server');
}

export default function BestOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-private-server" />;
}
