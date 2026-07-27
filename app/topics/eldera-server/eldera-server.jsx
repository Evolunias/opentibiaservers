import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-server');
}

export default function ElderaServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-server" />;
}
