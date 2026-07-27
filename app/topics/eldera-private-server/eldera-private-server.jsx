import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-private-server');
}

export default function ElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-private-server" />;
}
