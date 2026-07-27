import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-poland-servers');
}

export default function ElderaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-poland-servers" />;
}
