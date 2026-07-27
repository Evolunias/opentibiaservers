import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-chile-server');
}

export default function ElderaChileServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-chile-server" />;
}
