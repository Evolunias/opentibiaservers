import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-chile-servers');
}

export default function ElderaChileServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-chile-servers" />;
}
