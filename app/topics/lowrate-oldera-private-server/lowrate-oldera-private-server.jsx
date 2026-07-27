import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-private-server');
}

export default function LowrateOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-private-server" />;
}
