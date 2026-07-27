import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-latin-america-server');
}

export default function ElderaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-latin-america-server" />;
}
