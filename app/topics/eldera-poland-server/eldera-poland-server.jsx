import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-poland-server');
}

export default function ElderaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-poland-server" />;
}
