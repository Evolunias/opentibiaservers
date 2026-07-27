import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-canada-server');
}

export default function ElderaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-canada-server" />;
}
