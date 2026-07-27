import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-private-server');
}

export default function TopOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-private-server" />;
}
