import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-latin-america-servers');
}

export default function ElderaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-latin-america-servers" />;
}
