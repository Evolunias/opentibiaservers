import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-canada-servers');
}

export default function ElderaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-canada-servers" />;
}
